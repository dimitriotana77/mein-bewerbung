import os

# გზას ვაძლევ C დისკზე საძიებლად
drive_path = "C:\\"

# ამ ფუნქციით ვსაჭვრეტთ ფოლდერებს და ვპოულობთ დიდებს
def get_folder_sizes(path):
    folder_sizes = []
    for foldername, subfolders, filenames in os.walk(path):
        try:
            total_size = 0
            for filename in filenames:
                file_path = os.path.join(foldername, filename)
                if os.path.exists(file_path):
                    total_size += os.path.getsize(file_path)
            if total_size > 1 * 1024 * 1024 * 1024:  # 1 GB-ზე მეტი
                folder_sizes.append((foldername, total_size))
        except:
            continue
    return sorted(folder_sizes, key=lambda x: x[1], reverse=True)

# ვძახებ ფუნქციას და ვბეჭდავთ შედეგებს
print("დიდი ფოლდერები C დისკზე (>1GB):\n")
folders = get_folder_sizes(drive_path)
for folder, size in folders:
    size_gb = round(size / (1024 * 1024 * 1024), 2)
    print(f"{folder} — {size_gb} GB")
