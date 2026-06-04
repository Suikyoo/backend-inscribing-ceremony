import os, shutil, subprocess
from pathlib import Path


pictorial_dir = Path("pictorial")
root = Path("../public")

f = open("data.txt", "r")
data = [[j.strip() for j in i.split("-")] for i in f.readlines()]
data = {i[0] : i[1] for i in data}

for k in data.keys():
    try:
        p = pictorial_dir / k.upper() / "SELECTED" / "EDITED"

        if p.exists():
            files = [i for i in p.iterdir() if i.suffix == ".JPG"]
            for j in range(len(files)):
                src = files[j]
                dest = root / (data[k] + "_" + str(j) + ".jpeg")
                # shutil.copy(src, dest)
                subprocess.run(["ffmpeg",  "-i",  src , "-filter:v", f"scale=400:600",  dest])
                #print(f"copy from {src} to {dest}")

        else:
            raise ValueError("path does not exist")

    except Exception as e:
        print(e)
        print(f"missed {k}")




