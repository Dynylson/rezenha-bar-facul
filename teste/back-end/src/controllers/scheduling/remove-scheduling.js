import * as schedulingService from '../../services/scheduling.js';

export async function removeSchedulingController(req, res) {
    try {
        const { id } = req.params;

        await schedulingService.remove(id);

        res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao remover agendamento' });
    }
}
