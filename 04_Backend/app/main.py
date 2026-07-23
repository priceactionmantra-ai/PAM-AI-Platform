from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="PAM AI Platform Backend",
    version="1.0.0",
)

# Allow requests from Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "PAM AI Platform Backend Running"
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "PAM AI Platform Backend"
    }