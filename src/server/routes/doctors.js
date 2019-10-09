var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

let doctors = [
    {
        id: 1,
        fname: 'امیر', lname: 'امینیان',
        specialty: 'متخصص ارتوپدی',
        attendance: { morning: [], afternoon: [2, 3] },
        description: 'متخصص جراحی استخوان مفاصل و ستون فقرات-نحوه ی پذیرش بیمار : بیماران ارتوپدی'
    },
    {
        id: 2,
        fname: 'وحید', lname: 'زنگوری',
        specialty: 'جراحی عمومی',
        attendance: { morning: [], afternoon: [2] },
        description: 'متخصص جراحی عمومی فلوشیپ جراحی سرطان-نحوه ی پذیرش بیمار : سرطان سینه (برست )- و معده- و سنگ صفرا'
    },
    {
        id: 3,
        fname: 'مریم', lname: 'شفیعی',
        specialty: 'متخصص داخلی -فوق تخصص کلیه و فشار خون و آنکولوژی',
        attendance: { morning: [], afternoon: [4] },
        description: 'متخصص داخلی فوق تخصص کلیه –فشارخون-دیالیز-پیوند-نحوه ی پذیرش بیمار :بیمارانی با مشکل دفع پروتئین- فشار خون -بیماران پیوندی،دیالیزی-'
    },
    {
        id: 4,
        fname: 'محمدرضا', lname: 'روان بد',
        specialty: 'متخصص داخلی - فوق تخصص خون و آنکولوژی',
        attendance: { morning: [2], afternoon: [] },
        description: ''
    }
    
];

router.get('/', function (req, res) {
    res.send(doctors);
});
router.post('/id', (req, res) => {
    const id = +req.body.id;
    const doctor = doctors.find(doc => doc.id === id);
    res.send(doctor);
});
router.post('/specialty', (req, res) => {
    const sp = req.body.specialty;
    const doctorSp = doctors.filter(doc => {
        if (doc.specialty === sp) {
            return { id: doc.id, fname: doc.fname, lname: doc.lname };
        }
    });
    res.send(doctorSp);
})

module.exports = router;