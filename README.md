# Monify Api

## Development

To run in development environment use 

``` npm run server ```

development routes have http://localhost:3001/ prefix

---
## Production - Live Routes

### All

https://monifyapi.herokuapp.com/store -> Returns all items in store

### Category

https://monifyapi.herokuapp.com/store/<< Category >>

e.g.

 https://monifyapi.herokuapp.com/store/fashion -> returns all items in the fashion category

### Price Filter Category

https://monifyapi.herokuapp.com/store/fashion?price=<< Filter >>

Filter can be either : A specific <b> price </b> (£6500); <b> increasing </b> (low to high); <b> decreasing </b> (high to low)
