default:
    just --list

run:
    zola serve

run-drafts:
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
