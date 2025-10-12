class PacketQueue:
    def __init__(self,startSize=10):
        startSize = max(startSize,10)
        self.arr = [None]*startSize
        self.front = 0
        self.back = 0
        self.size = 0
        self.capacity = startSize
        self.map = {}
    def resize(self,size):
        size=max(int(size),10)
        old = self.arr
        new  = [None]*size
        last = -1
        for i in range(self.back,self.front):
            new[i-self.back]=old[i]
            last = i-self.back
        self.arr = new
        self.front = last+1
        self.back = 0
        self.capacity = size
    def enqueue(self,item):
        if(self.front >self.capacity*.8):
            self.resize((self.capacity*2)//1)
        self.arr[self.front]=item
        self.front+=1
        self.size+=1
        self.map[tuple(item)]=True
    def dequeue(self):
        if self.size == 0:
            raise ValueError("Cannot dequeue from empty Queue")
        val = self.arr[self.back]
        self.arr[self.back]=None
        self.back+=1
        self.size-=1

        del self.map[tuple(val)]
        return val
    def peekFront(self):
        if self.size == 0:
            return None
        return tuple(self.arr[self.front-1])
    def contains(self,item):
        if tuple(item) in self.map:
            return True
        return False
    def countBetweenTimes(self,start,end):
        if(self.size==0):
            return 0
        l = self.back
        r = self.front-1
        firstStartIndex = self.front
        while(l<=r):
            mid = (l+r)//2
            src,dest,time = self.arr[mid]
            if time>=start:
                firstStartIndex=min(firstStartIndex,mid)
                r=mid-1
            else:
                l=mid+1
        l = firstStartIndex
        r = self.front-1
        lastEndIndex = self.back-1
        while(l<=r):
            mid = (l+r)//2
            src,dest,time = self.arr[mid]
            if time<=end:
                lastEndIndex=max(lastEndIndex,mid)
                l=mid+1
            else:
                r=mid-1
        if(lastEndIndex<firstStartIndex):
            return 0
        return lastEndIndex-firstStartIndex+1


class Router:

    def __init__(self, memoryLimit: int):
        self.packetQueue = PacketQueue()
        self.destinationQueues = {}
        self.memoryLimit = memoryLimit
    def addPacket(self, source: int, destination: int, timestamp: int) -> bool:
        dq = self.destinationQueues
        pq = self.packetQueue
        packetTuple = (source,destination,timestamp)
        packet = [source,destination,timestamp]
        if (destination in dq) and  dq[destination].contains(packet):
                return False
        if pq.size == self.memoryLimit:
            src,dest,time =pq.dequeue()
            dq[dest].dequeue()
        pq.enqueue(packet)
        if(destination not in dq):
            dq[destination] = PacketQueue()
        dq[destination].enqueue(packet)
        return True
    def forwardPacket(self) -> List[int]:
        dq = self.destinationQueues
        pq = self.packetQueue
        if(pq.size ==0):
            return []
        src,dest,time = pq.dequeue()
        dq[dest].dequeue()
        if(dq[dest]==0):
            del dq[dest]
        return [src,dest,time]


    def getCount(self, destination: int, startTime: int, endTime: int) -> int:
        dq = self.destinationQueues
        if destination not in dq:
            return 0
        return dq[destination].countBetweenTimes(startTime,endTime)


# Your Router object will be instantiated and called as such:
# obj = Router(memoryLimit)
# param_1 = obj.addPacket(source,destination,timestamp)
# param_2 = obj.forwardPacket()
# param_3 = obj.getCount(destination,startTime,endTime)