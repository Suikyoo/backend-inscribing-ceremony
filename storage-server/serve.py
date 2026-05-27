import os, dotenv, functools
import http.server as serve
dotenv.load_dotenv("../.env")

root = "public"
host = os.getenv("STORAGE_HOST")
port = os.getenv("STORAGE_PORT")
if not (host and port):
    raise RuntimeError

handler =  functools.partial(serve.SimpleHTTPRequestHandler, directory=root)
server = serve.HTTPServer((host, int(port)), handler)
print(f"server\nlistening on: {host}:{port}\nserving on: {root}\n...")

try:
    server.serve_forever()

except KeyboardInterrupt:
    server.shutdown()
    server.server_close()
    print("server closed") 
    
