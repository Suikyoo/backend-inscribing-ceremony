import os, dotenv, functools
import http.server as serve
dotenv.load_dotenv("../.env")

# note: this has been transferred to backend-server
# only the public directory is in use as well as preprocessing scripts
# nothing is hosted here
root = "public"
host = os.getenv("STORAGE_HOST")
port = os.getenv("STORAGE_PORT")
if not (host and port):
    raise EnvironmentError

handler =  functools.partial(serve.SimpleHTTPRequestHandler, directory=root)
server = serve.HTTPServer((host, int(port)), handler)
print(f"server\nlistening on: {host}:{port}\nserving on: {root}\n...")

try:
    server.serve_forever()

except KeyboardInterrupt:
    server.shutdown()
    server.server_close()
    print("server closed") 
    
