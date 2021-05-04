let visits = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { pet, date, reason, followUp } = req.body;

        const info = {
            id: id,
            pet: pet,
            date: date,
            reason: reason,
            followUp: followUp
        }

        visits.push(info);
        id++;
        res.status(200).send(visits);
    },

    read: (req, res) => {
        res.status(200).send(visits);
    },

    update: (req, res) => {
        const {id} = req.params;
        const {followUp} = req.body;

        const index = visits.findIndex((e) => {
            return e.id === +id
        });

        visits[index].followUp = followUp;
        res.status(200).send(visits);
    },

    delete: (req, res) => {
        const {id} = req.params;
        const index = visits.findIndex(visit => visit.id === +id);
        if (index === -1){
            return res.status(500).send('Visit not found');
        }

        visits.splice(index, 1);
        res.status(200).send(visits);
    }
}