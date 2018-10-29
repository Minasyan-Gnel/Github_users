class StoreUsers {
    constructor () {
        this.listeners = [];
    }
    addListener (type, callback) {
        this.listeners.push({type, callback});
    }
    setData (data, type) {
        this.listeners
        .filter(listener => listener.type === type)
        .forEach(listener => listener.callback(data))
    }
}

export default new StoreUsers();