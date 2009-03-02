module DateTimeTextFieldHelpers
  module FormHelpers

    def date_text_field(object_name, method, options = {})
      # Create a new InstanceTag object
      instancetag = ActionView::Helpers::InstanceTag.new(object_name, method, self, options.delete(:object))

      # Call instance_tag.tb method 'to_date_text_field_tag(options)'
      instancetag.to_date_text_field_tag(options)
    end

    def time_text_field(object_name, method, options = {})
      ActionView::Helpers::InstanceTag.new(object_name, method, self, options.delete(:object)).to_time_text_field_tag(options)
    end

    def datetime_text_field(object_name, method, options = {})
      ActionView::Helpers::InstanceTag.new(object_name, method, self, options.delete(:object)).to_datetime_text_field_tag(options)
    end

  end
end
