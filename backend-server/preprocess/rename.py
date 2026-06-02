
import os

root = "../public"

def get_numbers(s):
    res = ""
    r = len(s) - 1

    for l in reversed(range(len(s))):
        if not s[l].isdigit():
            r = l

        res = max(res,  s[l:r+1], key=len)
    return res

counter = 0
for i in os.listdir(root):
    base, ext = os.path.splitext(i)
    new_base = get_numbers(base)
    if not len(new_base):
        new_base = f"no_match_{counter}"
    os.rename(os.path.join(root, i), os.path.join(root, new_base+ext))
