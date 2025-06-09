const { validationResult } = require('express-validator');

const plants = [
  { id: 1, type: 'Flower', variety: 'Rose', plantingDate: '2024-05-01', location: 'Balcony' },
  { id: 2, type: 'Vegetable', variety: 'Tomato', plantingDate: '2024-04-10', location: 'Backyard' },
  { id: 3, type: 'Herb', variety: 'Mint', plantingDate: '2024-03-20', location: 'Kitchen' },
  { id: 4, type: 'Fruit', variety: 'Strawberry', plantingDate: '2024-02-15', location: 'Terrace' },
  { id: 5, type: 'Flower', variety: 'Tulip', plantingDate: '2024-01-25', location: 'Window' }
];

// Getters
exports.getLatestPlants = () => plants.slice(-4).reverse();
exports.getAllPlants = () => plants;
exports.getPlantById = (id) => plants.find(p => p.id === parseInt(id));

// View All
exports.viewAllPlants = (req, res) => {
  res.render('plants', {
    title: 'All Plants',
    plants: exports.getAllPlants()
  });
};

// Add Form
exports.showAddForm = (req, res) => {
  res.render('create', {
    title: 'Add New Plant',
    errors: [],
    formData: {}
  });
};

// Add Plant
exports.addPlant = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('create', {
      title: 'Add New Plant',
      errors: errors.array(),
      formData: req.body
    });
  }

  const { type, variety, plantingDate, location } = req.body;
  const newPlant = {
    id: Date.now(),
    type,
    variety,
    plantingDate,
    location
  };

  plants.push(newPlant);
  res.redirect('/plants');
};

// Edit Form
exports.showEditForm = (req, res) => {
  const id = parseInt(req.params.id);
  const plant = exports.getPlantById(id);

  if (!plant) {
    return res.status(404).send('Plant not found');
  }

  res.render('edit', {
    title: 'Edit Plant',
    errors: [],
    formData: plant
  });
};

// Update Plant
exports.updatePlant = (req, res) => {
  const errors = validationResult(req);
  const id = parseInt(req.params.id);

  if (!errors.isEmpty()) {
    return res.status(400).render('edit', {
      title: 'Edit Plant',
      errors: errors.array(),
      formData: { ...req.body, id }
    });
  }

  const index = plants.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).send('Plant not found');
  }

  plants[index] = {
    id,
    type: req.body.type,
    variety: req.body.variety,
    plantingDate: req.body.plantingDate,
    location: req.body.location
  };

  res.redirect('/plants');
};

// Delete Plant
exports.deletePlant = (req, res) => {
  const id = parseInt(req.params.id);
  const index = plants.findIndex(p => p.id === id);

  if (index !== -1) {
    plants.splice(index, 1);
  }

  res.redirect('/plants');
};
