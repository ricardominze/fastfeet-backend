import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  /**
   * Método para persistir modelo no banco de dados.
   * @name store
   * @param {Request} req
   * @param {Response} res
   */
  async store(req, res) {
    /**
     * A lib Yup é utilizada para
     *  validações de campos.
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    /**
     * Utilizando o objeto schema criado pelo You
     * para efetuar as validações.
     */
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    /**
     * Se validado com sucesso pelo Yup
     * parte para salvar os dados no BD.
     */
    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  /**
   * Método para atualizar modelo no banco de dados.
   * @name store
   * @param {Request} req
   * @param {Response} res
   */
  async update(req, res) {
    /**
     * A lib Yup é utilizada para
     *  validações de campos.
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientId = req.body.id;
    const recipient = await Recipient.findByPk(recipientId);
    const recipientUpdated = await recipient.update(req.body);

    return res.json(recipientUpdated);
  }
}

export default new RecipientController();
