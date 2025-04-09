#!/usr/bin/env bash

PIP_EXTRA_INDEX_URL=""
VENV_DIR=venv

# pyenv local

eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

clean() {
    find . -type d -name "__pycache__" -not -path "./venv/*" -print0 | xargs -0 rm -rf
}

print_python() {
    which python
    python --version
}

activate_venv() {
    if ! [ -d "$VENV_DIR" ]; then
        echo venv directory not found
        exit 1
    fi
    source venv/bin/activate
}

delete_venv() {
    command -v deactivate &> /dev/null && source deactivate &> /dev/null
    rm -rf venv
}


create_venv() {
    python -m venv venv
}

install() {
    create_venv
    activate_venv
    pip install --upgrade pip setuptools wheel
    pip install -r requirements.txt
}

reinstall() {
    delete_venv
    install
}

if declare -f "$1" >/dev/null; then
    # call arguments verbatim
    "$@"
    activate_venv
    print_python
else
    [ ! "$1" ] && exit 0
    # Show a helpful error
    echo "'$1' is not a known function name" >&2
    exit 1
fi
