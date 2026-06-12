export const SESSIONS = [
  {
    id: 1,
    title: 'Fractions — Like Denominators',
    difficulty: 1,
    topics: ['Fractions', 'Addition', 'Subtraction'],
    description: 'Add and subtract fractions that share the same denominator. The denominator stays the same — only the numerators change.',
    sections: [
      {
        id: 'A',
        title: 'Addition',
        desc: 'Add the numerators. Keep the denominator. Simplify if you can.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '\\dfrac{3}{8} + \\dfrac{2}{8}' },
          { n: 2,  type: 'compute', tex: '\\dfrac{1}{5} + \\dfrac{3}{5}' },
          { n: 3,  type: 'compute', tex: '\\dfrac{2}{9} + \\dfrac{4}{9}' },
          { n: 4,  type: 'compute', tex: '\\dfrac{5}{12} + \\dfrac{4}{12}' },
        ],
      },
      {
        id: 'B',
        title: 'Subtraction',
        desc: 'Subtract the numerators. Keep the denominator. Simplify if you can.',
        layout: 'grid',
        problems: [
          { n: 5,  type: 'compute', tex: '\\dfrac{5}{7} - \\dfrac{2}{7}' },
          { n: 6,  type: 'compute', tex: '\\dfrac{9}{10} - \\dfrac{3}{10}' },
          { n: 7,  type: 'compute', tex: '\\dfrac{7}{12} - \\dfrac{1}{12}' },
          { n: 8,  type: 'compute', tex: '\\dfrac{11}{15} - \\dfrac{4}{15}' },
        ],
      },
      {
        id: 'C',
        title: 'Word Problems',
        desc: 'Write the equation, then solve.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'A pizza is cut into 8 equal slices. You eat ' },
              { tex: '\\dfrac{3}{8}' },
              { text: ' of it and your friend eats ' },
              { tex: '\\dfrac{2}{8}' },
              { text: ' of it. What fraction of the pizza did you eat together?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'A ribbon is ' },
              { tex: '\\dfrac{9}{10}' },
              { text: ' of a metre long. You cut off ' },
              { tex: '\\dfrac{3}{10}' },
              { text: ' of a metre. How much ribbon is left?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Fractions — Unlike Denominators',
    difficulty: 2,
    topics: ['Fractions', 'LCD', 'Addition', 'Subtraction'],
    description: 'Add and subtract fractions with different denominators. Find the least common denominator (LCD) first, then rewrite both fractions before computing.',
    sections: [
      {
        id: 'A',
        title: 'Addition',
        desc: 'Find the LCD, rewrite both fractions, then add. Simplify.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '\\dfrac{1}{2} + \\dfrac{1}{3}' },
          { n: 2,  type: 'compute', tex: '\\dfrac{3}{4} + \\dfrac{1}{6}' },
          { n: 3,  type: 'compute', tex: '\\dfrac{2}{3} + \\dfrac{1}{5}' },
          { n: 4,  type: 'compute', tex: '\\dfrac{1}{4} + \\dfrac{3}{10}' },
        ],
      },
      {
        id: 'B',
        title: 'Subtraction',
        desc: 'Find the LCD, rewrite both fractions, then subtract. Simplify.',
        layout: 'grid',
        problems: [
          { n: 5,  type: 'compute', tex: '\\dfrac{5}{6} - \\dfrac{1}{4}' },
          { n: 6,  type: 'compute', tex: '\\dfrac{7}{8} - \\dfrac{1}{3}' },
          { n: 7,  type: 'compute', tex: '\\dfrac{5}{6} - \\dfrac{2}{9}' },
          { n: 8,  type: 'compute', tex: '\\dfrac{3}{4} - \\dfrac{2}{5}' },
        ],
      },
      {
        id: 'C',
        title: 'Word Problems',
        desc: 'Show all your steps.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'A container is ' },
              { tex: '\\dfrac{3}{4}' },
              { text: ' full. Someone pours in another ' },
              { tex: '\\dfrac{1}{6}' },
              { text: ' of the container. How full is it now? (Leave as a fraction less than 1 or as a mixed number.)' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'A trail is ' },
              { tex: '\\dfrac{7}{8}' },
              { text: ' of a kilometre long. You have already hiked ' },
              { tex: '\\dfrac{1}{3}' },
              { text: ' of a kilometre. How much of the trail is still ahead of you?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: 'Multiplying Fractions',
    difficulty: 2,
    topics: ['Fractions', 'Multiplication', 'Mixed Numbers'],
    description: 'Multiply fractions by multiplying numerators together and denominators together. For mixed numbers, convert to improper fractions first.',
    sections: [
      {
        id: 'A',
        title: 'Proper Fractions',
        desc: 'Multiply top × top and bottom × bottom. Simplify completely.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '\\dfrac{2}{3} \\times \\dfrac{3}{4}' },
          { n: 2,  type: 'compute', tex: '\\dfrac{3}{5} \\times \\dfrac{5}{6}' },
          { n: 3,  type: 'compute', tex: '\\dfrac{1}{2} \\times \\dfrac{4}{7}' },
          { n: 4,  type: 'compute', tex: '\\dfrac{3}{8} \\times \\dfrac{4}{9}' },
        ],
      },
      {
        id: 'B',
        title: 'Mixed Numbers',
        desc: 'Convert each mixed number to an improper fraction, then multiply.',
        layout: 'grid',
        problems: [
          { n: 5,  type: 'compute', tex: '1\\dfrac{1}{2} \\times \\dfrac{2}{3}' },
          { n: 6,  type: 'compute', tex: '2\\dfrac{1}{4} \\times \\dfrac{1}{3}' },
          { n: 7,  type: 'compute', tex: '1\\dfrac{3}{4} \\times \\dfrac{2}{5}' },
          { n: 8,  type: 'compute', tex: '2\\dfrac{2}{3} \\times \\dfrac{3}{8}' },
        ],
      },
      {
        id: 'C',
        title: 'Word Problems',
        desc: 'Write the multiplication equation, then solve.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'A recipe calls for ' },
              { tex: '\\dfrac{3}{4}' },
              { text: ' cup of sugar. You want to make ' },
              { tex: '\\dfrac{1}{2}' },
              { text: ' of the recipe. How much sugar do you need?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'A piece of wood is ' },
              { tex: '2\\dfrac{1}{2}' },
              { text: ' metres long. You use ' },
              { tex: '\\dfrac{3}{5}' },
              { text: ' of it. How many metres of wood did you use?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: 'Dividing Fractions',
    difficulty: 3,
    topics: ['Fractions', 'Division', 'Reciprocal'],
    description: 'Divide fractions using "keep, change, flip": keep the first fraction, change ÷ to ×, then flip the second fraction (use its reciprocal).',
    sections: [
      {
        id: 'A',
        title: 'Keep · Change · Flip',
        desc: 'Rewrite as multiplication by the reciprocal, then compute. Simplify.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '\\dfrac{1}{2} \\div \\dfrac{1}{4}' },
          { n: 2,  type: 'compute', tex: '\\dfrac{3}{4} \\div \\dfrac{3}{8}' },
          { n: 3,  type: 'compute', tex: '\\dfrac{2}{3} \\div \\dfrac{1}{6}' },
          { n: 4,  type: 'compute', tex: '\\dfrac{5}{6} \\div \\dfrac{5}{12}' },
          { n: 5,  type: 'compute', tex: '\\dfrac{1}{2} \\div \\dfrac{3}{4}' },
          { n: 6,  type: 'compute', tex: '\\dfrac{2}{3} \\div \\dfrac{4}{5}' },
          { n: 7,  type: 'compute', tex: '\\dfrac{3}{4} \\div \\dfrac{9}{16}' },
          { n: 8,  type: 'compute', tex: '\\dfrac{5}{8} \\div \\dfrac{15}{16}' },
        ],
      },
      {
        id: 'B',
        title: 'Word Problems',
        desc: 'Identify the division equation, then solve.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'You have ' },
              { tex: '\\dfrac{3}{4}' },
              { text: ' of a litre of juice. Each cup holds ' },
              { tex: '\\dfrac{1}{8}' },
              { text: ' of a litre. How many cups can you fill completely?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'A rope that is ' },
              { tex: '\\dfrac{5}{6}' },
              { text: ' of a metre long is cut into pieces that are each ' },
              { tex: '\\dfrac{1}{12}' },
              { text: ' of a metre. How many pieces are there?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: 'Decimal Addition & Subtraction',
    difficulty: 2,
    topics: ['Decimals', 'Addition', 'Subtraction'],
    description: 'Add and subtract decimals. Line up the decimal points so that tenths align with tenths, hundredths with hundredths, and so on.',
    sections: [
      {
        id: 'A',
        title: 'Addition',
        desc: 'Line up the decimal points, then add column by column.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '4.75 + 3.8' },
          { n: 2,  type: 'compute', tex: '6.4 + 2.83' },
          { n: 3,  type: 'compute', tex: '0.75 + 2.3 + 0.48' },
          { n: 4,  type: 'compute', tex: '3.6 + 4.95 + 1.2' },
        ],
      },
      {
        id: 'B',
        title: 'Subtraction',
        desc: 'Line up the decimal points. Add zeros as placeholders where needed.',
        layout: 'grid',
        problems: [
          { n: 5,  type: 'compute', tex: '12.3 - 7.65' },
          { n: 6,  type: 'compute', tex: '15.0 - 8.47' },
          { n: 7,  type: 'compute', tex: '20.4 - 13.85' },
          { n: 8,  type: 'compute', tex: '100.0 - 43.7' },
        ],
      },
      {
        id: 'C',
        title: 'Word Problems',
        desc: 'Write the equation, then solve.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'A water bottle holds ' },
              { tex: '1.5' },
              { text: ' litres. In the morning you drink ' },
              { tex: '0.65' },
              { text: ' litres and in the afternoon you drink ' },
              { tex: '0.48' },
              { text: ' litres. How much water is left?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'Three books weigh ' },
              { tex: '1.35' },
              { text: ' kg, ' },
              { tex: '0.9' },
              { text: ' kg, and ' },
              { tex: '2.07' },
              { text: ' kg. What is their total weight?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 6,
    title: 'Multiplying Decimals',
    difficulty: 3,
    topics: ['Decimals', 'Multiplication'],
    description: 'Multiply decimals as if they were whole numbers, then count the total decimal places in both factors and place the decimal point that many places from the right in the answer.',
    sections: [
      {
        id: 'A',
        title: 'Multiply',
        desc: 'Ignore the decimal point at first. Count total decimal places, then place the point in the answer.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '3.4 \\times 2.5' },
          { n: 2,  type: 'compute', tex: '4.8 \\times 0.25' },
          { n: 3,  type: 'compute', tex: '0.6 \\times 0.4' },
          { n: 4,  type: 'compute', tex: '7.5 \\times 1.2' },
          { n: 5,  type: 'compute', tex: '5.6 \\times 0.75' },
          { n: 6,  type: 'compute', tex: '12.5 \\times 0.4' },
          { n: 7,  type: 'compute', tex: '0.35 \\times 20' },
          { n: 8,  type: 'compute', tex: '2.3 \\times 4.0' },
        ],
      },
      {
        id: 'B',
        title: 'Word Problems',
        desc: 'Set up the multiplication, then solve.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'A car travels at ' },
              { tex: '64.5' },
              { text: ' km/h for ' },
              { tex: '2.5' },
              { text: ' hours. How far does it travel?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'Each bag of soil weighs ' },
              { tex: '3.75' },
              { text: ' kg. How much do ' },
              { tex: '4' },
              { text: ' bags weigh in total?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 7,
    title: 'Dividing Decimals',
    difficulty: 3,
    topics: ['Decimals', 'Division'],
    description: 'To divide by a decimal, multiply both numbers by a power of 10 to make the divisor a whole number. Then divide normally.',
    sections: [
      {
        id: 'A',
        title: 'Divide',
        desc: 'Make the divisor a whole number by moving both decimal points the same number of places.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '7.2 \\div 0.9' },
          { n: 2,  type: 'compute', tex: '15.6 \\div 1.2' },
          { n: 3,  type: 'compute', tex: '4.8 \\div 0.6' },
          { n: 4,  type: 'compute', tex: '36.0 \\div 0.4' },
          { n: 5,  type: 'compute', tex: '8.1 \\div 2.7' },
          { n: 6,  type: 'compute', tex: '0.72 \\div 0.08' },
          { n: 7,  type: 'compute', tex: '14.4 \\div 1.6' },
          { n: 8,  type: 'compute', tex: '2.5 \\div 0.05' },
        ],
      },
      {
        id: 'B',
        title: 'Word Problems',
        desc: 'Identify what you are dividing, then solve.',
        layout: 'list',
        problems: [
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'A spool of wire is ' },
              { tex: '7.2' },
              { text: ' metres long. You cut it into pieces each ' },
              { tex: '0.9' },
              { text: ' metres long. How many pieces do you get?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'A bottle contains ' },
              { tex: '2.4' },
              { text: ' litres of juice. You pour equal amounts into glasses that each hold ' },
              { tex: '0.4' },
              { text: ' litres. How many glasses can you fill?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 8,
    title: 'Fractions ↔ Decimals',
    difficulty: 3,
    topics: ['Fractions', 'Decimals', 'Conversion'],
    description: 'Convert fractions to decimals by dividing numerator ÷ denominator. Convert decimals to fractions by writing the place value as the denominator, then simplify.',
    sections: [
      {
        id: 'A',
        title: 'Fraction → Decimal',
        desc: 'Divide the numerator by the denominator.',
        layout: 'grid',
        problems: [
          { n: 1,  type: 'compute', tex: '\\dfrac{3}{4} = ?' },
          { n: 2,  type: 'compute', tex: '\\dfrac{1}{5} = ?' },
          { n: 3,  type: 'compute', tex: '\\dfrac{7}{8} = ?' },
          { n: 4,  type: 'compute', tex: '\\dfrac{2}{5} = ?' },
          { n: 5,  type: 'compute', tex: '\\dfrac{3}{8} = ?' },
        ],
      },
      {
        id: 'B',
        title: 'Decimal → Fraction',
        desc: 'Use the place value of the last digit as the denominator. Simplify completely.',
        layout: 'grid',
        problems: [
          { n: 6,  type: 'compute', tex: '0.6 = ?' },
          { n: 7,  type: 'compute', tex: '0.25 = ?' },
          { n: 8,  type: 'compute', tex: '0.375 = ?' },
          { n: 9,  type: 'compute', tex: '1.5 = ?' },
          { n: 10, type: 'compute', tex: '0.8 = ?' },
        ],
      },
    ],
  },

  {
    id: 9,
    title: 'Area with Fractions',
    difficulty: 4,
    topics: ['Area', 'Fractions', 'Multiplication'],
    description: 'Find the area of rectangles when side lengths are fractions or mixed numbers. Area = length × width. Always include the unit squared in your answer.',
    sections: [
      {
        id: 'A',
        title: 'Rectangle Area',
        desc: 'Area = length × width. Multiply the fractions and include the units².',
        layout: 'area-grid',
        problems: [
          {
            n: 1, type: 'area',
            wLabel: '¾ ft', hLabel: '⅔ ft',
            fill: '#dbeafe', stroke: '#3b82f6',
            tex: '\\text{length} = \\dfrac{3}{4}\\text{ ft},\\quad \\text{width} = \\dfrac{2}{3}\\text{ ft}',
            label: 'Area =',
          },
          {
            n: 2, type: 'area',
            wLabel: '2½ cm', hLabel: '1⅓ cm',
            fill: '#dcfce7', stroke: '#16a34a',
            tex: '\\text{length} = 2\\dfrac{1}{2}\\text{ cm},\\quad \\text{width} = 1\\dfrac{1}{3}\\text{ cm}',
            label: 'Area =',
          },
          {
            n: 3, type: 'area',
            wLabel: '⅚ m', hLabel: '⅗ m',
            fill: '#fdf4ff', stroke: '#9333ea',
            tex: '\\text{length} = \\dfrac{5}{6}\\text{ m},\\quad \\text{width} = \\dfrac{3}{5}\\text{ m}',
            label: 'Area =',
          },
          {
            n: 4, type: 'area',
            wLabel: '1¾ in', hLabel: '2⅔ in',
            fill: '#fff7ed', stroke: '#ea580c',
            tex: '\\text{length} = 1\\dfrac{3}{4}\\text{ in},\\quad \\text{width} = 2\\dfrac{2}{3}\\text{ in}',
            label: 'Area =',
          },
        ],
      },
      {
        id: 'B',
        title: 'Word Problems',
        desc: 'Draw a picture if it helps. Write the equation, then solve.',
        layout: 'list',
        problems: [
          {
            n: 5, type: 'word', label: 'Area =',
            parts: [
              { text: 'A garden bed is ' },
              { tex: '\\dfrac{3}{4}' },
              { text: ' of a yard wide and ' },
              { tex: '\\dfrac{5}{6}' },
              { text: ' of a yard long. What is its area in square yards?' },
            ],
          },
          {
            n: 6, type: 'word', label: 'Area =',
            parts: [
              { text: 'A tile is ' },
              { tex: '2\\dfrac{1}{3}' },
              { text: ' inches long and ' },
              { tex: '1\\dfrac{1}{2}' },
              { text: ' inches wide. What is its area?' },
            ],
          },
          {
            n: 7, type: 'word', label: 'Area =',
            parts: [
              { text: 'A patch of grass measures ' },
              { tex: '4\\dfrac{1}{2}' },
              { text: ' feet by ' },
              { tex: '2\\dfrac{2}{3}' },
              { text: ' feet. What is its area?' },
            ],
          },
          {
            n: 8, type: 'word', label: 'Total area =',
            parts: [
              { text: 'Three identical square tiles each have a side length of ' },
              { tex: '2\\dfrac{1}{3}' },
              { text: ' inches. What is the total area covered by all three tiles?' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 10,
    title: 'Area with Decimals & Mixed Review',
    difficulty: 5,
    topics: ['Area', 'Decimals', 'Fractions', 'Mixed Review'],
    description: 'Find areas when dimensions are decimals, then tackle a mixed review covering everything from Sessions 1–9. Show every step.',
    sections: [
      {
        id: 'A',
        title: 'Area — Decimal Dimensions',
        desc: 'Multiply the decimal side lengths. Don\'t forget the unit².',
        layout: 'area-grid',
        problems: [
          {
            n: 1, type: 'area',
            wLabel: '4.5 m', hLabel: '3.2 m',
            fill: '#fff7ed', stroke: '#ea580c',
            tex: '\\text{length} = 4.5\\text{ m},\\quad \\text{width} = 3.2\\text{ m}',
            label: 'Area =',
          },
          {
            n: 2, type: 'area',
            wLabel: '2.75 in', hLabel: '1.4 in',
            fill: '#fdf4ff', stroke: '#9333ea',
            tex: '\\text{length} = 2.75\\text{ in},\\quad \\text{width} = 1.4\\text{ in}',
            label: 'Area =',
          },
          {
            n: 3, type: 'area',
            wLabel: '8.5 m', hLabel: '4.2 m',
            fill: '#dbeafe', stroke: '#3b82f6',
            tex: '\\text{length} = 8.5\\text{ m},\\quad \\text{width} = 4.2\\text{ m}',
            label: 'Area =',
          },
          {
            n: 4, type: 'area',
            wLabel: '6.3 cm', hLabel: '2.5 cm',
            fill: '#dcfce7', stroke: '#16a34a',
            tex: '\\text{length} = 6.3\\text{ cm},\\quad \\text{width} = 2.5\\text{ cm}',
            label: 'Area =',
          },
        ],
      },
      {
        id: 'B',
        title: 'Mixed Review',
        desc: 'These problems mix fractions, decimals, and area. Take your time.',
        layout: 'list',
        problems: [
          { n: 5, type: 'compute', tex: '\\dfrac{3}{4} + \\dfrac{1}{8}' },
          { n: 6, type: 'compute', tex: '2.8 \\times 3.5' },
          { n: 7, type: 'compute', tex: '\\dfrac{5}{6} \\div \\dfrac{1}{3}' },
          {
            n: 8, type: 'word', label: 'Area =',
            parts: [
              { text: 'A rectangular yard is ' },
              { tex: '15\\dfrac{1}{2}' },
              { text: ' feet long and ' },
              { tex: '8\\dfrac{3}{4}' },
              { text: ' feet wide. What is the total area?' },
            ],
          },
          {
            n: 9, type: 'word', label: '=',
            parts: [
              { text: 'Convert ' },
              { tex: '\\dfrac{11}{4}' },
              { text: ' to a decimal, then subtract ' },
              { tex: '1.35' },
              { text: ' from it. What is the result?' },
            ],
          },
          {
            n: 10, type: 'word', label: '=',
            parts: [
              { text: 'A pool cover is ' },
              { tex: '8.5' },
              { text: ' metres long and ' },
              { tex: '4.2' },
              { text: ' metres wide. Fencing around the entire perimeter costs $' },
              { tex: '12.50' },
              { text: ' per metre. What is the total fencing cost?' },
            ],
          },
        ],
      },
    ],
  },
];
