NODE_MODULES_BIN = node_modules/.bin

COPY_SOURCE = $(NODE_MODULES_BIN)/flow-copy-source
BABEL = $(NODE_MODULES_BIN)/babel

SOURCE = ./src
DISTRIBUTABLE = ./dist

.PHONY: all

all:
	$(BABEL) $(SOURCE) -d $(DISTRIBUTABLE)
	$(COPY_SOURCE) $(SOURCE) $(DISTRIBUTABLE)

dev:
	$(BABEL) $(SOURCE) -d $(DISTRIBUTABLE) -w