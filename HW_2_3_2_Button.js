class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }

  onClick() {
    console.log(Object.values(this));
  }

  testButton(width, height, type, color) {
    if (
      this.width === width &&
      this.height === height &&
      this.type === type &&
      this.color === color
    ) {
      return console.log("Заданные свойства кнопки соответствуют");
    } else {
      return console.log("Заданные свойства кнопки не соответствут");
    }
  }
}

let cancelButton = new Button(15, 25, "button", "green");

cancelButton.onClick();

cancelButton.testButton(15, 24, "button", "green");
