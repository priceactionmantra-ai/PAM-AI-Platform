from fastapi import FastAPI

app = FastAPI(
    title="PAM AI Platform Backend",
    version="1.0.0",
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