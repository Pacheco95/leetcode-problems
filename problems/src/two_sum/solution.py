class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        visited_numbers: dict[int, int] = {}

        for i, n in enumerate(nums):
            complement_index = visited_numbers.get(target - n, None)

            if complement_index is not None:
                return [complement_index, i]

            visited_numbers[n] = i
