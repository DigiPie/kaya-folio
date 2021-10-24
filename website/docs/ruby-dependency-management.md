---
title: Dependency management
---

Published on October 24, 2021

## Why do we use bundler?

Why do we use `bundle install` rather than `gem install`?

Bundler installs the exact gems and versions that are needed. It resolves all dependency conflicts for you automatically, which you would have to manually resolve if you had used `gem install` instead.

For example, if you have two gems requiring different versions of the same gem `nokogiri`:

```Gemfile
sunspot_rails
  nokogiri (>= 1.2.0)

webrat
  nokogiri (>= 1.3) 
```

If you use `gem install` to install `sunspot_rails` and `webrat`, it might install both `1.2.0` and `1.3.0` nokogiri versions or even complain about version conflicts. If you use `bundle install` instead, Bundler will resolve this dependency conflict by installing the right `nokogiri` version, which is `1.3` in this example.

## Resources

- [bundler.io](https://bundler.io/)
- [Why "bundle install" a gem instead of "gem install" for a rails 3 app?](https://stackoverflow.com/questions/7273853/why-bundle-install-a-gem-instead-of-gem-install-for-a-rails-3-app)