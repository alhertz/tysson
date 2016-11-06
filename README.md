## Overview

Code for official website of [Tysson](tyssonband.com), built with [Middleman](https://middlemanapp.com).

#### Setup

1. Install Ruby dependencies with bundler (must be installed)
```
bundle install
```
2. Install javascript dependencies with Bower (currently  jQuery)
```
bower install
```
3. Run the "app" 
```
middleman serve
```

#### Deployment

```
git push origin master
```

Any update to master triggers automatic deployments to tysson-production.netlify.com
