# IMPORTANTE

Para poder usar la pagina se necesita tener un token de acceso de Spotify, se tiene que hacuna peticion POST a esta url **https://accounts.spotify.com/api/token** y en el body, de tipo **x-www-form-urlencoded**, se debe enviar los siguientes datos:
```
    "grant_type": "client_credentials"
    "client_id": (your client_id)
    "client_secret": (your client_secret)
```

El **client_secret** y el **client_id** se obtienen al crear una cuenta de developer es la paginade spotify para desarrolladores **https://developer.spotify.com/**