import * as schedulingService from '../../services/scheduling.js';

export async function getSchedulingsController(req, res) {
    try {
        const schedulings = await schedulingService.findAll();

        res.status(200).json(schedulings);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao listar agendamentos' });
    }
}
