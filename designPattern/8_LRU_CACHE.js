class LRUCache {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }
  add(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.size) {
      this.cache.delete(this.first());
    }
    this.cache.set(key, value);
  }

  get(key) {
    const item = this.cache.get(key);

    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  first() {
    return this.cache.keys().next().value;
  }
}

const lruCache = new LRUCache(3);

lruCache.add("name", "akshay");
lruCache.add("place", "Bglore");
lruCache.add("age", "24");
lruCache.get("name");

console.log(lruCache.cache);
