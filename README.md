<p align="center">
	<a href="http://roli.whir.io"><img src="media/roli.png" alt="roli.whir.io" /></a>
</p>

### Roli
Random names as a service.


### API

##### GET [//roli.whir.io](http://roli.whir.io)/name/{gender}
A personal name. Not gender specific.<br />
`gender`: (string) `female`, `male`.

```
{
  "firstName": "Mahatma",
  "lastName": "Gandhi",
  "age": 48
}
```


##### GET [//roli.whir.io](http://roli.whir.io)/group/{minLength}/{maxLength}
A group name.<br />
`minLength`: (integer) Defaults to 6.<br />
`maxLength`: (integer) Defaults to 20.

```
{
  "groupName": "Precious.Declaration"
}
```


##### GET [//roli.whir.io](http://roli.whir.io)/username/{minLength}/{maxLength}
A username.<br />
`minLength`: (integer) Defaults to 6.<br />
`maxLength`: (integer) Defaults to 15.

```
{
  "userName": "LunarSpotnik"
}
```


### License

[MIT](https://github.com/WhirIO/Roli/blob/master/LICENSE)
