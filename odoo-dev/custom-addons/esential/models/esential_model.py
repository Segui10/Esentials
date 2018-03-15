# -*- coding: utf-8 -*-
from odoo import models, fields, api


class Components(models.Model):
    _name = 'esential.task'
    _description = 'Esential Computers Components'

    name = fields.Char('Name', required=True)
    type = fields.Char('Type', required=True)
    marca = fields.Char('Marca', required=True)
    price = fields.Float('Price')
    description = fields.Text('Description', required=True)
    status = fields.Char('Status')
    date = fields.Date('Date')
    points = fields.Integer('Points', required=True)
    shop = fields.Integer('Shop', required=True)
    tested = fields.Boolean('Tested', default=False)
    active = fields.Boolean('Active', default=True)

    @api.multi
    def do_toggle_done(self):
        for task in self:
            task.tested = not task.tested
        return True

class Shops(models.Model):
    _name = 'esentials.task'
    _description = 'Esential Computers Shops'

    name = fields.Char('Name', required=True)
    lat = fields.Char('Latitude', required=True)
    lon = fields.Char('Longitude', required=True)