interface ForLogin {
  @Input() login: Login;
  @Output() loginSuccess = new EventEmitter();
}