from collections import deque
from bisect import bisect_left, bisect_right

class Router:
    def __init__(self, memory_limit: int):
        self.memory_limit = memory_limit              
        self.packet_queue = deque()                    
        self.packet_set = set()                        
        self.destination_map = {}                   

    def addPacket(self, source: int, destination: int, timestamp: int) -> bool:
        packet_key = (source, destination, timestamp)

        if packet_key in self.packet_set:
            return False

        self.packet_queue.append(packet_key)
        self.packet_set.add(packet_key)

        if destination not in self.destination_map:
            self.destination_map[destination] = [[], 0]

        timestamps, left_index = self.destination_map[destination]
        timestamps.append(timestamp)

        if len(self.packet_queue) > self.memory_limit:
            src, dest, time = self.packet_queue.popleft()
            self.packet_set.remove((src, dest, time))
            timestamps_old, left_old = self.destination_map[dest]
            self.destination_map[dest][1] = left_old + 1  
        return True

    def forwardPacket(self) -> list[int]:
        if not self.packet_queue:
            return []

        src, dest, time = self.packet_queue.popleft()
        self.packet_set.remove((src, dest, time))

        timestamps, left_index = self.destination_map[dest]
        self.destination_map[dest][1] = left_index + 1
        return [src, dest, time]

    def getCount(self, destination: int, start_time: int, end_time: int) -> int:
        if destination not in self.destination_map:
            return 0

        timestamps, left_index = self.destination_map[destination]

        if left_index >= len(timestamps):
            return 0

        left_bound = bisect_left(timestamps, start_time, left_index)
        right_bound = bisect_right(timestamps, end_time, left_index)
        return max(0, right_bound - left_bound)
