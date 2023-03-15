import os
import re

path = input("folder name: ")
files = os.listdir(path)
f = open("names.txt", "w")
for i in files:
    y = re.sub('\'', '&#39;', i)
    x = re.sub('.webp', '', y)
    fid = x
    fname = re.sub('_', ' ', x)
    fimg = "images/" + path + "/" + i
    f.write("{id: '" + fid + "', name: '" + fname + "', image: '" + fimg + "'},\n")
    print(x)
f.close()
