import os, shutil
from pathlib import Path


pictorial_dir = Path("pictorial")
root = Path("../public")

f = open("data.txt", "r")
data = [[j.strip() for j in i.split("-")] for i in f.readlines()]
data = {i[0] : i[1] for i in data}

for k in data.keys():
    try:
        p = pictorial_dir / k.upper() / "SELECTED"

        if p.exists():
            files = [i for i in p.iterdir() if i.suffix == ".JPG"]
            if len(files):
                src = files[0]
                dest = root / (data[k] + "jpeg")
                dest = os.path.join(root, data[k] + ".jpeg")
                shutil.copy(src, dest)
                #print(f"copy from {src} to {dest}")
            else:
                raise ValueError("no images in path")
            

        else:
            raise ValueError("path does not exist")

    except Exception as e:
        print(e)
        print(f"missed {k}")




