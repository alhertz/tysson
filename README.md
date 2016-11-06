## Overview

Code for official website of [Tysson](http://tyssonband.com), built with [Middleman](https://middlemanapp.com).

#### Setup

Install Ruby dependencies with bundler (must be installed)
```
bundle install
```
Install javascript dependencies with Bower (currently  jQuery)
```
bower install
```
Run the "app" 
```
middleman serve
```

#### Deployment

```
git push origin master
```

Any update to master triggers automatic deployments to tysson-production.netlify.com
