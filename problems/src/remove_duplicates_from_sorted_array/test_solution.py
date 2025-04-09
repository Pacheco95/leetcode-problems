import pytest
from .solution import Solution

@pytest.mark.parametrize('numbers,expected', [
    ([1, 1, 1, 2, 2, 3, 3], [1, 2, 3])
])
def test_solution(numbers, expected):
    new_size = Solution().removeDuplicates(numbers)
    assert numbers[:new_size] == expected
