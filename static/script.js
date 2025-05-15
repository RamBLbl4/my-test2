const questionsContainer = document.getElementById("questions-container");
const resultsContainer = document.getElementById("results");
const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");

let fullName = ""; // Переменная для ФИО
let groupNumber = ""; // Переменная для номера группы



const questions1 = [
  
  

  {
    text: "Какой размер блоков используется в базовом режиме JPEG?",
    options: ["4x4", "8x8", "16x16", "32x32"],
    correctAnswer: 1
  },

  {
    text: "От чего зависит PSNR между исходным и декодированным изображением?",
    options: ["От размера блока ДКП", "От шага квантования", "От типа предсказания", "Все варианты верны"],
    correctAnswer: 3
  },

  
  {
    text: "В каком случае в JPEG-LS используется медианное предсказание?",
    options: [
      "При наличии контуров в окрестности пикселя",
      "Для однородных областей",
      "Для цветных изображений",
      "При высоком уровне шума"
    ],
    correctAnswer: 0
  },
  {
    text: "Какая маска соответствует оператору Лапласа?",
    options: [
      "[0, 1, 0; 1, -4, 1; 0, 1, 0]",
      "[1, 2, 1; 2, -4, 2; 1, 2, 1]",
      "[1, 0, 1; 0, -4, 0; 1, 0, 1]",
      "[-1, -1, -1; -1, 8, -1; -1, -1, -1]"
    ],
    correctAnswer: 0
  },
  {
    text: "Как изменится PSNR при увеличении шага квантования?",
    options: ["Увеличится", "Уменьшится", "Не изменится", "Зависит от изображения"],
    correctAnswer: 1
  },

  {
    text: "Какие данные кодируются кодами Хаффмана в JPEG?",
    options: [
      "Спектральные коэффициенты ДКП",
      "Ошибки предсказания после RLE",
      "Яркостная компонента",
      "Цветоразностные компоненты"
    ],
    correctAnswer: 1
  },

  {
    text: "Какое условие указывает на наличие контура при MED-предсказании?",
    options: ["C ≥ max(A, B)", "C ≤ min(A, B)", "1 и 2 варианты", "C = A + B"],
    correctAnswer: 2
  },
  {
    text: "Какой диапазон значений имеет бинарное изображение после пороговой обработки?",
    options: ["[0, 255]", "[0, 1]", "[0, 127] и [128, 255]", "Только 0 и 255"],
    correctAnswer: 3
  },
  {
    text: "Как выбирается параметр m в кодах Голомба для минимизации длины кода?",
    options: [
      "m равно среднему значению ошибок",
      "m равно дисперсии ошибок",
      "m подбирается экспериментально",
      "m должно быть степенью двойки"
    ],
    correctAnswer: 2
  },
  {
    text: "Какая формула используется для расчета PSNR?",
    options: [
      "10 · log10(MAX² / MSE)",
      "20 · log10(MAX / MSE)",
      "10 · log2(MAX² / MSE)",
      "MAX - MSE"
    ],
    correctAnswer: 0
  },
  {
    text: "Как кодируются отрицательные ошибки предсказания в кодах Голомба?",
    options: [
      "В двоичном дополнительном коде",
      "Преобразуются в нечетные числа",
      "Игнорируются",
      "Кодируются отдельным битом знака"
    ],
    correctAnswer: 1
  },
  {
    text: "Какой критерий минимизируется при расчете коэффициентов линейного предсказания?",
    options: [
      "Сумма модулей ошибок",
      "Сумма квадратов ошибок",
      "Максимальная ошибка",
      "Средняя абсолютная ошибка"
    ],
    correctAnswer: 1
  },
  {
    text: "Какой порог T используется для формирования бинарного изображения с максимальным контрастом?",
    options: [
      "Среднее значение яркости",
      "Медиана гистограммы",
      "Зависит от содержания изображения",
      "127 для 8-битных изображений"
    ],
    correctAnswer: 2
  },
 

  
  {
    text: "Какая организация разработала стандарт JPEG?",
    options: ["ISO/IEC", "ITU-T", "Joint Photographic Expert Group (JPEG)", "CCITT"],
    correctAnswer: 2
  },
  {
    text: "Какая формула описывает модель аддитивного шума для 8-битных изображений?",
    options: [
      "I'_{y,x} = I_{y,x} × N_{y,x}",
      "I'_{y,x} = Clip(I_{y,x} + N_{y,x}, 0, 255)",
      "I'_{y,x} = Median(I_{y,x} + N_{y,x})",
      "I'_{y,x} = I_{y,x} - N_{y,x}"
    ],
    correctAnswer: 1
  },
  {
    text: "Какое свойство соседних пикселей учитывает фильтр Гаусса?",
    options: ["Слабая корреляция", "Сильная корреляция", "Отсутствие корреляции", "Переменная корреляция"],
    correctAnswer: 1
  },
  {
    text: "Как применяется оператор Лапласа для усиления контуров?",
    options: [
      "I' = I + ∇²I, если центральный элемент маски положителен",
      "I' = I - ∇²I, если центральный элемент маски отрицателен",
      "I' = ∇²I",
      "1 и 2 варианты"
    ],
    correctAnswer: 3
  },
 
  {
    text: "Какой размер блоков используется при дискретном косинусном преобразовании (ДКП) в стандарте JPEG?",
    options: ["4x4", "8x8", "16x16", "32x32"],
    correctAnswer: 1
  },
  {
    text: "Как влияет увеличение параметра R в формуле q_{i,j}(R) = 1 + (i + j) · R на качество изображения?",
    options: ["Качество улучшается", "Качество ухудшается", "Не влияет", "Зависит от изображения"],
    correctAnswer: 1
  },
  {
    text: "Какой метод предсказания используется в стандарте JPEG-LS?",
    options: ["Линейное предсказание", "Медианное предсказание (MED)", "Адаптивное предсказание", "Всё вышеперечисленное"],
    correctAnswer: 1
  },

  {
    text: "Для чего используется зигзагообразный обход коэффициентов ДКП в JPEG?",
    options: [
      "Для ускорения вычислений",
      "Для группировки низкочастотных коэффициентов",
      "Для минимизации длины серий нулевых коэффициентов",
      "Для повышения точности квантования"
    ],
    correctAnswer: 2
  },


 






  
 
  {
    text: "Сколько различных таблиц квантования может содержаться в битовом потоке JPEG?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3
  },
  {
    text: "Какой двухбайтовый код используется для обозначения начала секции DQT в JPEG?",
    options: ["FFD8", "FFDB", "FFC0", "FFDA"],
    correctAnswer: 1
  },
  {
    text: "Какое преобразование используется в стандарте JPEG?",
    options: ["ДПФ", "ДВП", "ДКП", "Вейвлет-преобразование"],
    correctAnswer: 2
  },
  {
    text: "Какая цветовая модель используется при обработке данных в базовом режиме JPEG?",
    options: ["RGB", "CMYK", "YCbCr", "HSV"],
    correctAnswer: 2
  },
  {
    text: "Какое максимальное значение может иметь индекс таблицы квантования Tq в JPEG?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2
  },


  {
    text: "Что является основным преимуществом использования YCbCr по сравнению с RGB?",
    options: ["Улучшение качества", "Уменьшение размера файла", "Удобство обработки", "Лучшая цветопередача"],
    correctAnswer: 1
//
  },
  {
    text: "Какая мера используется для оценки искажений в JPEG?",
    options: ["MSE", "SSIM", "PSNR", "VIF"],
    correctAnswer: 2
  },
  {
    text: "Какое преобразование применяется перед прореживанием цветоразностных компонент?",
    options: ["RGB → YCbCr", "YCbCr → RGB", "HSV → RGB", "CMYK → RGB"],
    correctAnswer: 0
  },
 
 
 
 
  {
    text: "Как называется процесс уменьшения разрешения цветоразностных компонент?",
    options: ["Децимация", "Интерполяция", "Экстраполяция", "Фильтрация"],
    correctAnswer: 0
//?????????
  },
  {
    text: "Какой метод используется для кодирования DC коэффициентов в JPEG?",
    options: ["RLE", "Хаффман", "Арифметическое кодирование", "Разностное кодирование"],
    correctAnswer: 3
  },

  {
    text: "Какой алгоритм используется для нахождения оптимальных коэффициентов линейной комбинации при предсказании?",
    options: ["Быстрый преобразователь Фурье", "Преобразование Хафа", "Алгоритм Левинсона-Дарбина", "Алгоритм Кнута-Морриса-Пратта"],
    correctAnswer: 2
  },


  {
    text: "Какой размер имеет ядро двумерного фильтра при использовании апертуры радиуса R?",
    options: [
      "(2R+1) × (2R+1)",
      "R × R",
      "2R × 2R",
      "4R × 4R"
    ],
    correctAnswer: 0
  },
  {
    text: "Как изменится ошибка предсказания, если в DPCM коде убрать обратную связь?",
    options: [
      "Ошибки предсказания увеличатся",
      "Ошибки предсказания уменьшатся",
      "Ошибки предсказания останутся неизменными",
      "Невозможно определить"
    ],
    correctAnswer: 0
  },
  {
    text: "Какова сложность алгоритма Левинсона-Дарбина?",
    options: [
      "O(n)",
      "O(n^2)",
      "O(n^3)",
      "O(2^n)"
    ],
    correctAnswer: 1
  },
  {
    text: "Пусть для одних и тех же входных данных получены два набора ошибок предсказания: x = {x_1, x_2, ..., x_n} — ошибки на выходе MED предсказания; x' = {x'_1, x'_2, ..., x'_n} — ошибки на выходе авторегрессионной модели. Укажите, какие из следующих утверждений верны:",
    options: [
      "∃i : x'_i > x_i",
      "∀i : x'_i < x_i",
      "∀i : x'_i > x_i",
      "∑_{i=1}^{n} |x'_i| > ∑_{i=1}^{n} |x_i|"
    ],
    correctAnswer: 0
  },
  {
    text: "Является ли целевая функция в задаче подбора оптимальных параметров кода Голомба унимодальной?",
    options: [
      "Да",
      "Нет",
      "Зависит от данных",
      "Неизвестно"
    ],
    correctAnswer: 0
  },


  {
    text: "Как называется процесс уменьшения вычислительной сложности двумерного преобразования?",
    options: [
      "Сепарабельность преобразования",
      "Декомпозиция преобразования",
      "Оптимизация преобразования",
      "Упрощение преобразования"
    ],
    correctAnswer: 0
  },
  {
    text: "Какой метод используется для кодирования AC коэффициентов в JPEG?",
    options: [
      "RLE",
      "Хаффман",
      "Арифметическое кодирование",
      "Голомба"
    ],
    correctAnswer: 0
  }


];



  
const questions2 = [  
  
  {
    text: "Какой фильтр используется на этом изображении?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cappadocia_Gaussian_Blur.svg/800px-Cappadocia_Gaussian_Blur.svg.png",
    options: [
      "Оригинальное изображение",
      "Размытие по Гауссу",
      "Изображение с высоким контрастом"
    ],
    correctAnswer: 1
  },

  
  

  {
    text: "Какой метод уменьшения шума используется на этом фото?",
    imageUrl: "static/metod.png",  
    options: [
      "Метод скользящего среднего",
      "Фильтр Гаусса",
      "Идея линейной фильтрации изображения",
      "Медианный фильтр"
    ],
    correctAnswer: 0
  },


   {
    text: "Какой метод уменьшения шума используется на этом фото?",
    imageUrl: "static/metod2.png",  
    options: [
      "Метод скользящего среднего",
      "Фильтр Гаусса",
      "Идея линейной фильтрации изображения",
      "Медианный фильтр"
    ],
    correctAnswer: 1
  },


  {
  text: "Какое изображение лучше всего подходит для сжатия?",
  images: [
    "static/lenna.bmp",  // Путь к первому изображению
    "static/baboon.bmp", // Путь ко второму изображению
    "static/pepper.bmp"  // Путь к третьему изображению
  ],
  options: [
    "Lenna",   // Вариант 1
    "Baboon",  // Вариант 2 (правильный ответ)
    "Pepper"   // Вариант 3
  ],
  correctAnswer: 1 
  },

  {
    type: "matching",
    text: "Соотнесите изображения с методами, которые к ним применены.",
    images: [
      "static/lenna_denoised_mean.png",
      "static/lenna_denoised_mean222.png"
    ],
    definitions: [
      "Скользящего среднего",
      "Гауса"
    ],
    correctAnswer: [0, 1]
  }

];



const questions3 = [

  {
    type: "matching",
    text: "Соотнесите изображения с моделями шума, которые к ним применены",
    images: [
      "static/SaltPepperGraySamolet.png",
      "static/GaussGraySamolet.png"
    ],
    definitions: [
      "Аддитивный",
      "Импульсный"
    ],
    correctAnswer: [1, 0]
  },


  {
    type: "matching",
    text: "Соотнесите изображения с моделями шума, которые к ним применены",
    images: [
      "static/impulse_noise.png",
      "static/gaussian_noise.png"
    ],
    definitions: [
      "Аддитивный",
      "Импульсный"
    ],
    correctAnswer: [1, 0]
  },


  {
    type: "matching",
    text: "Соотнесите изображения с моделями шума, которые к ним применены",
    images: [
      "static/noise_image_1.png",
      "static/noise_image_2.png"
    ],
    definitions: [
      "Аддитивный",
      "Импульсный"
    ],
    correctAnswer: [0, 1]
  }
];


const questions4 = [

  {
    
  text: "Ниже представлены три изображения после применения трех методов интерполяции. Какой метод интерполяции применен ко второму изображению?",
  images: [
    "static/interpolation_bilinear_ZOOMMAP.png",  // Путь к первому изображению
    "static/interpolation_nearest_ZOOMMAP.png", // Путь ко второму изображению
    "static/interpolation_bicubic_ZOOMMAP.png"  // Путь к третьему изображению
  ],
  options: [
    "Интерполяция по ближайшему соседу",
    "Билинейная интерполяция",
    "Бикубическая интерполяция"
  ],
  correctAnswer: 0
  },


  {
    type: "matching",
    text: "Соотнесите изображения с методами интерполяции, которые к ним применены",
    images: [
      "static/interpolation_bilinear_ZOOMTEXT1.png",  // Путь к первому изображению
      "static/interpolation_nearest_ZOOMTEXT1.png", // Путь ко второму изображению
      "static/interpolation_bicubic_ZOOMTEXT1.png"  // Путь к третьему изображению
    ],
    definitions: [
      "Интерполяция по ближайшему соседу",
      "Билинейная интерполяция",
      "Бикубическая интерполяция"
    ],
    correctAnswer: [1, 0, 2]
  }

];



const questions5 = [

  {
    type: "matching",
    text: "Соотнесите изображения, к которым применено квантование, с параметром R",
    images: [
      "static/dct_quant_idct_result_ZOOMLENNA30.png",  // Путь к первому изображению
      "static/dct_quant_idct_result_ZOOMLENNA5.png",
      "static/lenna.jpg" // Путь ко второму изображению
       
    ],
    definitions: [
      "R=5",
      "R=20",
      "R=0(исходное)"
    ],
    correctAnswer: [1, 0, 2]
  }
];



const questions6 = [

  {
    type: "matching",
    text: "Соотнесите изображения с методами фильтрации шума, которые к ним применены",
    images: [
      "static/metodsrednegoRGB.png",  // Путь к первому изображению
      "static/median_filter_3x3RGB.png"  // Путь к третьему изображению
    ],
    definitions: [
      "Медианный фильтр",
      "Метод скользящего среднего"
    ],
    correctAnswer: [1, 0]
  },


  {
    type: "matching",
    text: "Соотнесите изображения с методами фильтрации шума, которые к ним применены",
    images: [
      "static/median_filter_3x3RGB.png",  // Путь к первому изображению
      "static/filtrGAussaRGB.png"  // Путь к третьему изображению
    ],
    definitions: [
      "Медианный фильтр",
      "Фильтр Гаусса"
    ],
    correctAnswer: [0, 1]
  },


  {
    type: "matching",
    text: "Соотнесите изображения, полученные после применения метода скользящего среднего, с апертурой",
    images: [
      "static/metodsrednegoRGB.png",  // Путь к первому изображению
      "static/metodsrednegoAper35.png",
      "static/metodsrednegoAper15.png"  // Путь к третьему изображению
    ],
    definitions: [
      "7",
      "35",
      "15"
    ],
    correctAnswer: [0, 1, 2]
  }


 
];

// Функция перемешивания
function getRandomQuestions(arr, count) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

const testQuestions = [
  ...getRandomQuestions(questions1, 0),
  ...getRandomQuestions(questions2, 5),
  ...getRandomQuestions(questions3, 3),
  ...getRandomQuestions(questions4, 2),
  ...getRandomQuestions(questions5, 1),
  ...getRandomQuestions(questions6, 3)
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
const answeredQuestions = new Array(testQuestions.length).fill(false);
const selectedAnswers = new Array(testQuestions.length).fill(null);

// Переменные для управления линиями
let currentLine = null;
let startDot = null;
let isDrawing = false;
let permanentLines = []; // Массив для хранения постоянных линий

document.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("dot")) {
    isDrawing = true;
    startDot = e.target;
    currentLine = document.createElement("div");
    currentLine.classList.add("line");
    document.querySelector(".matching-container").appendChild(currentLine);
    updateLinePosition(e);
  }
});

document.addEventListener("mousemove", (e) => {
  if (!isDrawing || !currentLine) return;
  updateLinePosition(e);
});

document.addEventListener("mouseup", (e) => {
  if (!isDrawing || !startDot) return;
  if (e.target.classList.contains("dot")) {
    const endDot = e.target;
    // Проверяем, что точки из разных колонок
    const isLeftStart = startDot.closest(".left-column");
    const isRightEnd = endDot.closest(".right-column");
    const isRightStart = startDot.closest(".right-column");
    const isLeftEnd = endDot.closest(".left-column");

    if ((isLeftStart && isRightEnd) || (isRightStart && isLeftEnd)) {
      // Удаляем старые соединения для этих точек
      removeConnectionsForDots(startDot, endDot);
      // Создаем новое соединение
      createPermanentLine(startDot, endDot);
    }
  }

  // Удаляем временную линию
  if (currentLine) {
    currentLine.remove();
    currentLine = null;
  }
  isDrawing = false;
  startDot = null;
});

function removeConnectionsForDots(dot1, dot2) {
  // Удаляем все линии, связанные с этими точками
  const linesToRemove = [];
  permanentLines.forEach(line => {
    if (
      line.startDot === dot1 ||
      line.endDot === dot1 ||
      line.startDot === dot2 ||
      line.endDot === dot2
    ) {
      linesToRemove.push(line);
    }
  });

  linesToRemove.forEach(line => {
    if (line.element && line.element.parentNode) {
      line.element.parentNode.removeChild(line.element);
    }
    const index = permanentLines.indexOf(line);
    if (index !== -1) {
      permanentLines.splice(index, 1);
    }
  });
}

function createPermanentLine(startDot, endDot) {
  const line = document.createElement("div");
  line.classList.add("line");
  document.querySelector(".matching-container").appendChild(line);

  const rectStart = startDot.getBoundingClientRect();
  const rectEnd = endDot.getBoundingClientRect();
  const containerRect = document
    .querySelector(".matching-container")
    .getBoundingClientRect();

  const startX =
    rectStart.left + rectStart.width / 2 - containerRect.left;
  const startY =
    rectStart.top + rectStart.height / 2 - containerRect.top;
  const endX =
    rectEnd.left + rectEnd.width / 2 - containerRect.left;
  const endY =
    rectEnd.top + rectEnd.height / 2 - containerRect.top;

  const dx = endX - startX;
  const dy = endY - startY;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  line.style.width = `${length}px`;
  line.style.left = `${startX}px`;
  line.style.top = `${startY}px`;
  line.style.transform = `rotate(${angle}deg)`;

  // Сохраняем информацию о линии
  permanentLines.push({
    element: line,
    startDot: startDot,
    endDot: endDot,
    startIndex: parseInt(startDot.dataset.index),
    endIndex: parseInt(endDot.dataset.index)
  });
}

function updateLinePosition(e) {
  if (!startDot || !currentLine) return;

  const rectStart = startDot.getBoundingClientRect();
  const containerRect = document
    .querySelector(".matching-container")
    .getBoundingClientRect();

  const startX =
    rectStart.left + rectStart.width / 2 - containerRect.left;
  const startY =
    rectStart.top + rectStart.height / 2 - containerRect.top;
  const endX = e.clientX - containerRect.left;
  const endY = e.clientY - containerRect.top;

  const dx = endX - startX;
  const dy = endY - startY;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  currentLine.style.width = `${length}px`;
  currentLine.style.left = `${startX}px`;
  currentLine.style.top = `${startY}px`;
  currentLine.style.transform = `rotate(${angle}deg)`;
}

function checkMatchingAnswer() {
  const question = testQuestions[currentQuestion];
  if (question.type !== "matching") return;

  // Собираем текущие соединения
  const currentConnections = permanentLines.map(line => ({
    imageIndex: line.startDot.closest(".left-column")
      ? line.startIndex
      : line.endIndex,
    definitionIndex: line.startDot.closest(".right-column")
      ? line.startIndex
      : line.endIndex
  }));

  // Проверяем правильность ответа (это можно использовать при нажатии "Далее")
  // Здесь можно добавить логику проверки, если нужно
}

startButton.addEventListener("click", () => {
  fullName = document.getElementById("full-name").value;
  groupNumber = document.getElementById("group-number").value;
  if (fullName && groupNumber) {
    document.getElementById("instructions").style.display = 'none';
    startContainer.style.display = 'none';
    questionsContainer.style.display = 'block';
    timerInterval = startTimer(45 * 60);
    displayQuestion();
  } else {
    alert("Пожалуйста, заполните все поля.");
  }
});

function displayQuestion() {
  const question = testQuestions[currentQuestion];
  questionsContainer.innerHTML = '';
  updateQuestionNumbers();

  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  // Заголовок вопроса
  const questionText = document.createElement("h2");
  questionText.classList.add("question-text");
  questionText.textContent = question.text;
  questionElement.appendChild(questionText);

  // Если у вопроса одно изображение (imageUrl), покажем его
  if (question.imageUrl) {
    const singleImg = document.createElement("img");
    singleImg.src = question.imageUrl;
    singleImg.alt = "Картинка к вопросу";
    singleImg.style.maxWidth = "100%";
    singleImg.style.height = "auto";
    singleImg.style.marginBottom = "10px";
    questionElement.appendChild(singleImg);
  }

  // Если у вопроса массив изображений (images), выведем их в один горизонтальный ряд
  if (question.images && question.type !== "matching") {
    const imagesRow = document.createElement("div");
    imagesRow.classList.add("images-row");
    question.images.forEach((url, index) => {
      const multiImg = document.createElement("img");
      multiImg.src = url;
      multiImg.alt = "Изображение";
      multiImg.style.width = "450px";
      multiImg.style.height = "350px";

      // Создаем контейнер для изображения и номера
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");

      // Создаем элемент с номером изображения
      const imageNumber = document.createElement("span");
      imageNumber.classList.add("image-number");
      imageNumber.textContent = index + 1;

      // Добавляем изображение и номер в обертку
      imageWrapper.appendChild(multiImg);
      imageWrapper.appendChild(imageNumber);

      // Добавляем обертку в строку изображений
      imagesRow.appendChild(imageWrapper);
    });
    questionElement.appendChild(imagesRow);
  }

  // Обработка нового типа вопроса с соответствием
  if (question.type === "matching") {
    // Очищаем предыдущие линии
    permanentLines.forEach(line => {
      if (line.element && line.element.parentNode) {
        line.element.parentNode.removeChild(line.element);
      }
    });
    permanentLines = [];

    const matchingContainer = document.createElement("div");
    matchingContainer.classList.add("matching-container");

    // Левая часть: изображения
    const leftColumn = document.createElement("div");
    leftColumn.classList.add("matching-column", "left-column");
    question.images.forEach((url, index) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Изображение";
      img.style.width = "450px";
      img.style.height = "350px";

      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.dataset.index = index;

      imageWrapper.appendChild(dot);
      imageWrapper.appendChild(img);
      leftColumn.appendChild(imageWrapper);
    });

    // Правая часть: определения
    const rightColumn = document.createElement("div");
    rightColumn.classList.add("matching-column", "right-column");
    question.definitions.forEach((definition, index) => {
      const definitionWrapper = document.createElement("div");
      definitionWrapper.classList.add("definition-wrapper");

      const defText = document.createElement("p");
      defText.textContent = definition;

      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.dataset.index = index;

      definitionWrapper.appendChild(dot);
      definitionWrapper.appendChild(defText);
      rightColumn.appendChild(definitionWrapper);
    });

    matchingContainer.appendChild(leftColumn);
    matchingContainer.appendChild(rightColumn);
    questionElement.appendChild(matchingContainer);
  }

  const answersWrapper = document.createElement("div");
  answersWrapper.classList.add("answer-options");

  if (question.options && question.type !== "matching") {
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("answer-option");
      optionElement.textContent = option;

      optionElement.addEventListener("click", () => {
        document.querySelectorAll(".answer-option").forEach(el =>
          el.classList.remove("selected")
        );
        optionElement.classList.add("selected");
        selectedAnswer = index;
        selectedAnswers[currentQuestion] = index;
        answeredQuestions[currentQuestion] = true;
        updateQuestionNumbers();
      });

      answersWrapper.appendChild(optionElement);
    });
    questionElement.appendChild(answersWrapper);
  }

  questionsContainer.appendChild(questionElement);

  const nextButton = document.createElement("button");
  nextButton.textContent = currentQuestion === testQuestions.length - 1
    ? "Завершить тест"
    : "Далее";

  nextButton.style.display = "inline-block";

  nextButton.addEventListener("click", () => {
  const question = testQuestions[currentQuestion];

  if (question.type !== "matching" && selectedAnswer === null) {
    alert("Выберите ответ!");
    return;
  }

  let isCorrect = false;

  if (question.type === "matching") {
    const requiredPairs = question.correctAnswer.length;
    const userPairs = permanentLines.length;

    if (userPairs < requiredPairs) {
      alert("Соедините все изображения с определениями!");
      return;
    }

    // Собираем текущие соединения пользователя
    const userConnections = {};
    permanentLines.forEach(line => {
      const imageIndex = line.startDot.closest(".left-column")
        ? line.startIndex
        : line.endIndex;
      const definitionIndex = line.startDot.closest(".right-column")
        ? line.startIndex
        : line.endIndex;
      userConnections[imageIndex] = definitionIndex;
    });

    // Формируем правильные ответы
    const correctConnections = {};
    question.correctAnswer.forEach((defIndex, imgIndex) => {
      correctConnections[imgIndex] = defIndex;
    });

    // Проверяем, был ли уже засчитан балл за этот вопрос
    const wasAlreadyCorrect = selectedAnswers[currentQuestion] === "correct";

    // Сравниваем без учета порядка
    isCorrect = Object.keys(correctConnections).every(
      key => userConnections[key] === correctConnections[key]
    );

    // Увеличиваем счётчик ТОЛЬКО если это новый правильный ответ
    if (isCorrect && !wasAlreadyCorrect) {
      score++;
    }

    selectedAnswers[currentQuestion] = isCorrect ? "correct" : "incorrect";
    answeredQuestions[currentQuestion] = true;
  } else {
    // Обработка обычных вопросов
    const wasAlreadyCorrect =
      typeof selectedAnswers[currentQuestion] === "number"
        ? selectedAnswers[currentQuestion] === question.correctAnswer
        : false;

    if (selectedAnswer === question.correctAnswer && !wasAlreadyCorrect) {
      score++;
    }

    selectedAnswers[currentQuestion] = selectedAnswer;
    answeredQuestions[currentQuestion] = true;
  }

  currentQuestion++;
  selectedAnswer = null;

  if (currentQuestion < testQuestions.length) {
    displayQuestion();
  } else {
    if (answeredQuestions.every(answered => answered)) {
      clearInterval(timerInterval);
      showResults();
    } else {
      alert("Вы ответили не на все вопросы. Пожалуйста, ответьте на все вопросы перед завершением теста.");
      currentQuestion = testQuestions.length - 1;
      displayQuestion();
    }
  }
});

questionElement.appendChild(nextButton);
}

function updateQuestionNumbers() {
  const questionNumbersContainer = document.getElementById("question-numbers");
  questionNumbersContainer.innerHTML = '';

  const groups = Math.ceil(testQuestions.length / 10);

  for (let group = 0; group < groups; group++) {
    const groupContainer = document.createElement("div");
    groupContainer.classList.add("question-group");

    const start = group * 10;
    const end = Math.min((group + 1) * 10, testQuestions.length);

    for (let i = start; i < end; i++) {
      const numberElement = document.createElement("div");
      numberElement.classList.add("question-number");
      numberElement.textContent = i + 1;

      if (answeredQuestions[i]) {
        numberElement.classList.add("answered");
      }

      if (i === currentQuestion) {
        numberElement.classList.add("current");
      }

      numberElement.addEventListener("click", () => {
        currentQuestion = i;
        displayQuestion();
      });

      groupContainer.appendChild(numberElement);
    }

    questionNumbersContainer.appendChild(groupContainer);
  }
}

function showResults() {
  startContainer.style.display = 'none';
  questionsContainer.style.display = 'none';

  resultsContainer.innerHTML = `
    <div id="results-container">
      <h2>Результаты</h2>
      <p>ФИО: ${fullName}</p>
      <p>Номер группы: ${groupNumber}</p>
      <p>Вы ответили правильно на ${score} из ${testQuestions.length} вопросов.</p>
      <button onclick="window.location.reload()">Пройти тест снова</button>
    </div>
  `;

  testQuestions.forEach((question, index) => {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('question-result');

    const questionText = document.createElement('h3');
    questionText.textContent = `Вопрос ${index + 1}: ${question.text}`;
    resultDiv.appendChild(questionText);

    const optionsList = document.createElement('ul');
    question.options?.forEach((option, optIndex) => {
      const optionItem = document.createElement('li');
      optionItem.textContent = `${optIndex + 1}. ${option}`;
      optionsList.appendChild(optionItem);
    });
    resultDiv.appendChild(optionsList);

    const feedback = document.createElement('div');
    feedback.classList.add('answer-feedback');

    if (question.type === "matching") {
      // Правильные соответствия
      const correctMapping = question.correctAnswer.map((defIndex, imgIndex) =>
        `Изображение ${imgIndex + 1} → Определение ${defIndex + 1}`
      ).join(", ");

      feedback.textContent = `Правильные соответствия: ${correctMapping}`;

      // Добавляем текст о результате: "Вы ответили верно" или "Вы ответили неправильно"
      const finalFeedback = document.createElement("div");
      finalFeedback.classList.add("matching-result");
      finalFeedback.textContent = selectedAnswers[index] === "correct"
        ? "Вы ответили верно."
        : "Вы ответили неправильно.";
      resultDiv.appendChild(finalFeedback);
    } else if (selectedAnswers[index] === question.correctAnswer) {
      feedback.textContent = `Вы ответили верно, правильный ответ: ${question.options[question.correctAnswer]}`;
    } else {
      feedback.textContent = `Вы ответили неправильно, правильный ответ: ${question.options[question.correctAnswer]}`;
    }

    resultDiv.appendChild(feedback);
    resultsContainer.appendChild(resultDiv);
  });

  resultsContainer.style.display = 'block';
}

let timerInterval;
function startTimer(duration) {
  let timer = duration, minutes, seconds;
  const timerElement = document.getElementById('timer');

  timerInterval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);

  return timerInterval;
}
