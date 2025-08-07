import * as schedulingService from '../../services/scheduling.js';

export async function updateSchedulingController(req, res) {
    try {
        const { id } = req.params;
        const payload = req.body;

        await schedulingService.update(id, payload);

        res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar agendamento' });
    }
}
