from http.server import BaseHTTPRequestHandler, HTTPServer
import json

# 模拟数据库
users_db = {
    "admin": "123456",
}

# 保存已登录 token
tokens_db = set()

class MyHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200, content_type='application/json'):
        self.send_response(status)
        self.send_header('Content-type', content_type)
        self.send_header('Access-Control-Allow-Origin', '*')  # CORS
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        # 带 token 验证的文章接口
        if self.path == '/posts':
            auth_header = self.headers.get('Authorization')
            if not auth_header or not auth_header.startswith("Bearer "):
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "未授权"}).encode('utf-8'))
                return

            token = auth_header.split(" ")[1]
            if token not in tokens_db:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "无效 token"}).encode('utf-8'))
                return

            # 验证通过，返回文章
            self._set_headers()
            posts = [
                {"id": 1, "title": "第一篇文章", "summary": "这是第一篇文章的摘要"},
                {"id": 2, "title": "第二篇文章", "summary": "这是第二篇文章的摘要"},
            ]
            self.wfile.write(json.dumps(posts).encode('utf-8'))
        else:
            self._set_headers(404, 'text/plain')
            self.wfile.write(b'Not Found')

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8')
        data = json.loads(body)

        # 登录接口
        if self.path == '/login':
            username = data.get("username")
            password = data.get("password")
            if users_db.get(username) == password:
                token = f"{username}_token"
                tokens_db.add(token)  # 保存 token
                self._set_headers()
                self.wfile.write(json.dumps({"message": "登录成功", "token": token}).encode('utf-8'))
            else:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "用户名或密码错误"}).encode('utf-8'))
        else:
            self._set_headers(404, 'text/plain')
            self.wfile.write(b'Not Found')

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 8000), MyHandler)
    print('✅ Server running at http://0.0.0.0:8000')
    server.serve_forever()
