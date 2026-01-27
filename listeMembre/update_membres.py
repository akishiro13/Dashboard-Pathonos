import os
import json
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time

DOSSIER_PERSONNEL = "personnel"
JSON_PATH = os.path.join(DOSSIER_PERSONNEL, "membres.json")

def update_json():
    membres = []
    for f in sorted(os.listdir(DOSSIER_PERSONNEL)):
        if f.endswith(".html"):
            membres.append({"fichier": f})

    with open(JSON_PATH, "w", encoding="utf-8") as file:
        json.dump(membres, file, indent=4, ensure_ascii=False)

    print("🔄 JSON mis à jour")

class Watcher(FileSystemEventHandler):
    def on_any_event(self, event):
        if event.is_directory is False:
            update_json()

update_json()
observer = Observer()
observer.schedule(Watcher(), DOSSIER_PERSONNEL, recursive=False)
observer.start()

print("👁 Surveillance du dossier personnel en cours...")
try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
observer.join()