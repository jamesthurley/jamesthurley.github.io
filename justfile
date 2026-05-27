default:
    just --list

serve:
    zola serve

serve-drafts:
    zola serve --drafts

build:
    zola build

build-drafts:
    zola build --drafts

check:
    zola check --skip-external-links

check-links:
    zola check

clean:
    rm -rf public
