const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tarefaSchema = new Schema ({
    vc_tarefa: String,
    ch_status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tarefas', tarefaSchema);
