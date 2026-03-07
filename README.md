# marvin233.github.io

Personal academic website for **Dr. Minghua Ma**, Senior Researcher at Microsoft.

Pure HTML/CSS/JS — no build step required. Deployed via GitHub Pages.

## Structure

```
index.html               # Homepage (About)
publications/index.html  # Publications (loads data/publications.yml via JS)
services/index.html      # Academic services
activities/index.html    # Awards, Teaching, Talks
data/publications.yml    # All publications data (YAML)
assets/css/main.css      # Compiled stylesheet
assets/js/main.min.js    # Theme JS (dark mode, nav)
assets/webfonts/         # Font Awesome icons
images/                  # Photos, favicon
.nojekyll                # Tells GitHub Pages to skip Jekyll
```

## Adding a Publication

Add a new entry to `data/publications.yml`:

```yaml
- title: "Your Paper Title"
  topic: "Cloud Reliability"
  authors: "Author One, <u>Minghua Ma</u>, Author Three"
  category: conference
  venue: "ICSE'26"
  paper: "https://arxiv.org/abs/..."
  code: "https://github.com/..."
  bibtex: |-
    @inproceedings{key2026,
      title={Your Paper Title},
      author={...},
      booktitle={...},
      year={2026}
    }
```

Fields: `title`, `authors`, `category` (survey/conference/journal/workshop), `topic` (Incident Management / LLM & AI Agents / Anomaly Detection / Cloud Reliability / Networking), `venue`, `paper`, `code`, `dataset`, `bibtex`, `award` (all optional except title/authors/category).


