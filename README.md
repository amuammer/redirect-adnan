# redirect-adnan

## install
```javascript
npm install -g redirect-adnan
```
<hr>

### deploy to specific port
```javascript
redirect-adnan -p 80
```

### redirect to host
```javascript
redirect-adnan  -p 80 -host "127.0.0.1"
```

### redirect to port
```javascript
redirect-adnan -p 80 -port 443
```

### redirect to protocol
```javascript
redirect-adnan -protocol "https"
```

### redirect with multiple parameters
```javascript
redirect-adnan -p 80 -protocol "https" -host "127.0.0.1" -port 443
redirect-adnan -p 80 -protocol "https" -host "www.domain.com" -port 443
```

## License

  [MIT](LICENSE)
