SHELL := /bin/bash
DIST  := $(shell echo $$ANGULAR_GMAPS_DIST_FOLDER)
dist:
	cp -r dist/* $(DIST)/

.PHONY: dist