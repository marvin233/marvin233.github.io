# marvin233.github.io

Personal academic website for **Dr. Minghua Ma**, Senior Researcher at Microsoft.

Built with [Jekyll](https://jekyllrb.com/) using a customized [Academic Pages](https://github.com/academicpages/academicpages.github.io) template.

## Project Structure

```
_config.yml          # Site-wide configuration
_data/
  navigation.yml     # Top navigation bar links
  publications.yml   # All publications data (titles, authors, venues, BibTeX)
_pages/              # Main site pages (about, publications, services, teaching, talks)
_includes/           # Reusable HTML partials (header, footer, sidebar, etc.)
_layouts/            # Page layout templates
_sass/               # SCSS stylesheets and themes
assets/              # CSS, JS, fonts, and webfonts
images/              # Site images and theme screenshots
_publications/       # BibTeX utilities (fetch_bibtex.py, BibTex.js legacy)
```

### Key Data Files

- **`_data/publications.yml`** — All publications in a single YAML file. Each entry has title, authors, category (`survey`/`conference`/`journal`), venue, links (paper/code/dataset), inline BibTeX, and optional award info. The template in `_pages/publications.html` renders everything from this file.

- **`_data/navigation.yml`** — Top navigation links.

## Running Locally

### Using Docker (recommended)

```bash
docker compose up
```

The site will be available at [http://localhost:4000](http://localhost:4000).

### Without Docker

1. Install dependencies: `ruby-dev`, `bundler`, `nodejs`
2. Run `bundle install`
3. Run `jekyll serve -l -H localhost`

## Adding a Publication

Add a new entry to `_data/publications.yml`:

```yaml
- title: "Your Paper Title"
  authors: "Author One, <u>Minghua Ma</u>, Author Three"
  category: conference        # survey | conference | journal
  venue: "ICSE'26"
  paper: "https://arxiv.org/abs/..."
  code: "https://github.com/..."
  bibtex: |-
    @inproceedings{key2026,
      title={Your Paper Title},
      author={Author One and Ma, Minghua and Author Three},
      booktitle={Proceedings of ICSE},
      year={2026}
    }
  award: "Best Paper Award"    # optional
```

## Fetching BibTeX from Google Scholar

```bash
conda activate .conda
python _publications/fetch_bibtex.py --delay 3
```

## License

Based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template (MIT License). See [LICENSE](LICENSE) for details.
