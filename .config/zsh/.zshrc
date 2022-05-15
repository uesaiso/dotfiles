eval "$(/opt/homebrew/bin/brew shellenv)"

[[ -z "$TMUX" && ! -z "$PS1" ]] && exec tmux

for setting in /plugin_settings/*; do
  source $setting
done

source $ZDOTDIR/plugins.zsh

# load custom executable functions
for function in $ZDOTDIR/functions/*; do
  source $function
done

# extra files in $ZDOTDIR/configs/pre , $ZDOTDIR/configs , and $ZDOTDIR/configs/post
# these are loaded first, second, and third, respectively.
_load_settings() {
  _dir="$1"
  if [ -d "$_dir" ]; then
    if [ -d "$_dir/pre" ]; then
      for config in "$_dir"/pre/**/*.(zsh|zwc)(N-.); do
        . $config
      done
    fi

    for config in "$_dir"/**/*(N-.); do
      case "$config" in
        "$_dir"/(pre|post)/*|*.zwc)
          :
          ;;
        *)
          . $config
          ;;
      esac
    done

    if [ -d "$_dir/post" ]; then
      for config in "$_dir"/post/**/*.(zsh|zwc)(N-.); do
        . $config
      done
    fi
  fi
}
_load_settings "$HOME/.zsh/configs"

# Local config
[[ -f $ZDOTDIR/.zshrc.local ]] && source $ZDOTDIR/.zshrc.local

# aliases
[[ -f ~/.aliases ]] && source ~/.aliases

eval "$(direnv hook zsh)"

export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion