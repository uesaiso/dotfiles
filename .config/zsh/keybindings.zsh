do-enter() {
    if [[ -n $BUFFER ]]; then
      zle accept-line
      return $status
    fi

    echo
    if [[ -d .git ]]; then
        if [[ -n "$(git status --short)" ]]; then
            git status
        fi
    else
        # do nothing
        :
    fi

    zle reset-prompt
}
zle -N do-enter

bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down
bindkey '^P' history-substring-search-up
bindkey '^N' history-substring-search-down

bindkey '^v' anyframe-widget-edit-yadm
bindkey '^g' anyframe-widget-cd-ghq-repository
bindkey '^r' anyframe-widget-put-history
