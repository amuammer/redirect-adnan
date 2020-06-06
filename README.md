# redirect-adnan

## install
```javascript
npm install -g redirect-adnan
```
<hr>

## default values

| Var           | Default Value   |
| ------------- |:-------------:|
| p    | 80 |
| host | origin - req.host      |
| port | 443      |
| protocol | https |

<hr>

### redirect as proxy 80 => 443
```javascript
redirect-adnan -p 80 -port 443
```

### redirect to host
```javascript
redirect-adnan  -host "127.0.0.1"
redirect-adnan  -host "www.domain.com"
```

### redirect to port
```javascript
redirect-adnan -port 443
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
