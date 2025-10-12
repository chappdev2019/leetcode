from collections import deque, defaultdict
from typing import List, Tuple, Dict

class PacketQueue:
    def __init__(self):
        self.queue = deque()
        self.timestamps = []
        self.packet_set = set()

    def enqueue(self, packet: Tuple[int, int, int]):
        self.queue.append(packet)
        _, _, timestamp = packet
        self.timestamps.append(timestamp)
        self.packet_set.add(packet)

    def dequeue(self) -> Tuple[int, int, int]:
        if not self.queue:
            raise ValueError("Cannot dequeue from empty queue")
        packet = self.queue.popleft()
        _, _, timestamp = packet
        self.timestamps.pop(0)
        self.packet_set.remove(packet)
        return packet

    def contains(self, packet: Tuple[int, int, int]) -> bool:
        return packet in self.packet_set

    def _lower_bound(self, arr: List[int], target: int) -> int:
        left, right = 0, len(arr) - 1
        ans = len(arr)
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] >= target:
                ans = mid
                right = mid - 1
            else:
                left = mid + 1
        return ans

    def _upper_bound(self, arr: List[int], target: int) -> int:
        left, right = 0, len(arr) - 1
        ans = len(arr)
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] > target:
                ans = mid
                right = mid - 1
            else:
                left = mid + 1
        return ans

    def countBetweenTimes(self, start_time: int, end_time: int) -> int:
        if not self.timestamps:
            return 0
        start_index = self._lower_bound(self.timestamps, start_time)
        end_index = self._upper_bound(self.timestamps, end_time)
        return max(0, end_index - start_index)

    @property
    def size(self) -> int:
        return len(self.queue)

class Router:
    def __init__(self, memoryLimit: int):
        self.memoryLimit = memoryLimit
        self.globalQueue = PacketQueue()  
        self.destinationQueues: Dict[int, PacketQueue] = defaultdict(PacketQueue)

    def addPacket(self, source: int, destination: int, timestamp: int) -> bool:
        packet = (source, destination, timestamp)
        destQueue = self.destinationQueues[destination]

        if destQueue.contains(packet):
            return False

        if self.globalQueue.size >= self.memoryLimit:
            old_src, old_dest, _ = self.globalQueue.dequeue()
            self.destinationQueues[old_dest].dequeue()

        self.globalQueue.enqueue(packet)
        destQueue.enqueue(packet)
        return True

    def forwardPacket(self) -> List[int]:

        if self.globalQueue.size == 0:
            return []

        src, dest, time = self.globalQueue.dequeue()
        destQueue = self.destinationQueues[dest]
        destQueue.dequeue()

        if destQueue.size == 0:
            del self.destinationQueues[dest]

        return [src, dest, time]

    def getCount(self, destination: int, start_time: int, end_time: int) -> int:
 
        if destination not in self.destinationQueues:
            return 0
        destQueue = self.destinationQueues[destination]
        return destQueue.countBetweenTimes(start_time, end_time)
