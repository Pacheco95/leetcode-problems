import pytest
from .solution import Solution


@pytest.mark.parametrize('numbers,target,expected', [
    ([1, 2, 3], 5, [1, 2])
])
def test_solution(numbers, target, expected):
    result = Solution().twoSum(numbers, target)
    assert result == expected
