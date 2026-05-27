import os, subprocess

root = "public"
for i in os.listdir(root):
    base, ext = os.path.splitext(i)
    if ext.lower() == ".jpeg":
        continue
    subprocess.run(["ffmpeg", "-i", os.path.join(root, i), os.path.join(root, f"{base}.jpeg")])
    os.remove(os.path.join(root, i))

