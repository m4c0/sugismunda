# sugismunda

Hugo theme for technical documentation.

There is a lot of incredible themes for creating blogs with Hugo. This theme
has a strong focus on simplicity for technical writers, by fulfilling these
requirements:

* **Clean interface.** The content should more important than how it looks
* **Section-based navigation.** Blogs rely a lot in taxonomies (i.e. categories
  and tags) to guide the viewer. Tech docs usually requires accessible
  hierarchies.
* **Easy to extend.** Tech writers should not invest time tweaking the theme,
  but they should have enough extensibility to customize the theme to their own
  palette.
* **Minimal footprint for users.** Tech writers should write docs without
  requiring to learn a bunch of new acronyms and languages. One of the best
  Hugo features is being self-contained. Your theme should be as well.

## Installing the theme

Assuming you already have an working Hugo site setup, download the theme inside
the `themes/sugismunda` folder. Example using `git submodule`:

```
git submodule add https://github.com/m4c0/sugismunda.git themes/sugismunda
```

Change your site's configuration to use this theme. Example for `config.toml`:

```
theme = "sugismunda"
```

At this point, you will be able to run `hugo` with the new theme.

## Changing the palette

Currently, the palette uses shades of green. You can extend it by creating a
file inside `assets/css` named like `theme-my-variant.css` with a content like
this:

```css
:root {
  --fancy-font-family: Tahoma, Geneva, sans-serif;
  --palette-bg-main: #ffffff;
  --palette-bg-extras: #fefffc;
  --palette-rulers: #b3b3b3;
  --palette-details: #15b52b;
  --palette-fg-link: #11aa25;
  --palette-fg-main: #000000;
}
```

Then, change your config to include this:

```toml
[params]
  themeVariant = "my-variant"
```

## Support for multiple "versions"

If you want to distribute multiple versions of your documentation (example: one
per version of the software it documents), you can add a section like this in
your config:

```toml
[params]
  version = "dev"
  allVersions = [ "0.0.1", "0.0.2", "dev" ]
```

It will add a dropdown to the top-right corner of your website. It assumes all
versions share the same parent folder.
