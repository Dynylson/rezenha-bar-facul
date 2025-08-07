import * as schedulingService from '../../services/scheduling.js';

export async function createSchedulingController(req, res) {
    try {
        const payload = req.body;

        const scheduling = await schedulingService.create(payload);

        res.status(201).json(scheduling);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar agendamento' });
    }
}
