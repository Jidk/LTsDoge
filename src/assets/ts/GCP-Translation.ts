const api_key: string = 'AIzaSyDZvqZYPiqhfdYD-O6jGN_hCkBO7B_zeMA';

class translate {
  async dotest() {
    var res = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${api_key}`, {
      method: 'POST',
      body: JSON.stringify({
        "q": [
          "boy"
        ],
        "source": "en",
        "target": "zh-cn",
        "format": "text"
      }), // string or object
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    var json = await res.json();
    console.log(json);
  }
}

export { translate };
